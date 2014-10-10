BEM.JSON.decl({name: 'footer'}, {
    onBlock: function (ctx) {
        ctx.content([
            {
                block: 'copyright',
                content: [
                    '© ',
                    {
                        block: 'link',
                        url: '/',
                        content: 'Руїна'
                    },
                    ', 2013–14 рр.'
                ]
            },
            !BEM.blocks['i-auth'].check() && {
                block: 'auth',
                js: true,
                content: {
                    block: 'link',
                    mods: { pseudo: 'yes', login: 'yes'  },
                    content: 'Авторизуватися'
                }
            },
            BEM.blocks['i-auth'].check() && {
                block: 'auth',
                js: true,
                content: [
                    'Ви авторизовані. Написати ',
                    {
                        block: 'link',
                        url: '/editor/',
                        content: 'нотатку'
                    },
                    ' чи ',
                    {
                        block: 'link',
                        mods: { pseudo: 'yes', logout: 'yes' },
                        content: 'вийти'
                    },
                    '?'
                ]
            },
            {
                block: 'rss-link',
                content: {
                    block: 'link',
                    url: 'http://thefeature.com.ua/rss',
                    content: 'РСС'
                }
            }
        ]);
    }
});
