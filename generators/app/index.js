'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const removeDiacritics = require('diacritics').remove;
const camelCase = require('camelcase');
const config = require('./config');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const normalize = (string) => {
  return camelCase(removeDiacritics(string));
};

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Bem-Vindo ao gerador de Módulos em React da SMARAPD <3!`)
    );

    const prompts = [
      {
        type: 'list',
        name: 'system',
        message: 'Qual o Sistema?',
        choices: config.sistemas,
        default: config.sistemaDefault
      },
      {
        type: 'list',
        name: 'contextName',
        message: 'Qual o contexto do módulo?',
        choices: (props) => {
          return config.context[props.system];
        }
      },
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome da funcionalidade? (Ex.: "Horário Normal", "Contador")'
      },
      {
        type: 'input',
        name: 'moduleName',
        message: 'Qual o nome do módulo?',
        default: (props) => {
          return camelCase(removeDiacritics(props.name));
        }
      },
      {
        type: 'input',
        name: 'domainName',
        message: 'Qual o domínio (separar por "/")? (Ex.: "Mobiliario/Cadastro") OBS: O NOME DO MÓDULO JÁ ESTA IMPLÍCITO',
        default: (props) => {
          return props.contextName;
        }
      },
      {
        type: 'list',
        name: 'template',
        message: 'Qual o template a ser usado?',
        choices: (props) => {
          return config.templates;
        }
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
      this.props.context = normalize(this.props.contextName);
      this.props.objectName = capitalizeFirstLetter(this.props.moduleName);
      this.props.moduleNameLower = this.props.moduleName.toLowerCase();

      let splitDomainName = this.props.domainName.split('/');
      let normalizedDomainName = splitDomainName.map((str) => { return normalize(str) });
      let noDiacriticsDomainName = splitDomainName.map((str) => { return removeDiacritics(str) });

      this.props.domain = normalizedDomainName.join('/').toLowerCase() + '/' + this.props.moduleName;
      this.props.domainNormalized = normalizedDomainName.join('/') + '/' + this.props.moduleName;
      splitDomainName.push(this.props.name);
      this.props.domainArray = splitDomainName;
      this.props.noDiacriticsDomainArray = noDiacriticsDomainName;
    });
  }

  writing() {

    let tplParams = {
      system: this.props.system,
      context: this.props.context,
      contextName: this.props.contextName,
      moduleName: this.props.moduleName,
      name: this.props.name,
      objectName: this.props.objectName,
      moduleNameLower: this.props.moduleNameLower,
      domain: this.props.domain,
      domainArray: this.props.domainArray,
      domainNormalized: this.props.domainNormalized,
      domainNoDiacriticsArray: this.props.noDiacriticsDomainArray
    };

    for (var index in this.props.template) {

      let item = this.props.template[index];

      let splitItem = item.split('/');
      let fileName = splitItem[splitItem.length - 1].replace('_', this.props.moduleName);

      let filterPathArray = splitItem.filter((path) => {
        return config.templatesPathExclude.indexOf(path) == -1 && path.indexOf('.') == -1 && path.indexOf('_') == -1;
      });

      let pathDest = this.props.moduleName + '/' + filterPathArray.join('/') + '/';

      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(pathDest + fileName),
        tplParams
      );
    }
  }

  install() {
    this.log(chalk.green('Henn, agora vai trabalhar vagabundo!'));
  }
};
