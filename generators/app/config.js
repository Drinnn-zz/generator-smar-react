module.exports = {
    sistemas: ['TB'],
    sistemaDefault: 'TB',
    context: {
        TB: ['Imobiliario', 'Mobiliario', 'DividaAtiva', 'Juridico', 'Fiscalizacao', 'Sistema', 'Atendimento', 'Tesouraria', 'Obras', 'SimplesNacional', 'RedeSim']
    },
    templates: [
        {
            name: 'CRUD Simples (Grid, New, Edit, View)',
            value: [
                'simpleCrud/components/_.form.jsx',
                'simpleCrud/container/_.edit.jsx',
                'simpleCrud/container/_.grid.jsx',
                'simpleCrud/container/_.new.jsx',
                'simpleCrud/container/_.view.jsx',
                'simpleCrud/service/_.service.js',
                'simpleCrud/store/_.actions.js',
                'simpleCrud/store/_.reducer.js',
                'simpleCrud/store/_.saga.js',
                'simpleCrud/store/_.selectors.js',
                'simpleCrud/store/_.actionTypes.js',
                'simpleCrud/_.routes.js',
                'simpleCrud/_.ddados.js'
            ]
        }
    ],
    templatesPathExclude: ['simpleCrud']
}
