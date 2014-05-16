BEM.JSON.decl({name: 'entrance'}, {
    onBlock: function(ctx) {
        ctx.defer(
            BEM.blocks['i-api-request']
            .get('notes')
            .then(function(result) {
                var notes = result.notes,
                    introduction = notes[0],
                    latest = notes[notes.length - 1];
                ctx.content([
                    {
                        elem: 'title',
                        content: 'Нотатки на теми цікаві для мене'
                    },
                    {
                        elem: 'links',
                        content: [
                            {
                                elem: 'item',
                                content: {
                                    block: 'link',
                                    url: '/notes/' + introduction._id,
                                    content: 'Прочитати вступ'
                                }
                            },
                            {
                                elem: 'item',
                                content: {
                                    block: 'link',
                                    url: '/notes/',
                                    content: 'Оглянути зміст'
                                }
                            },
                            {
                                elem: 'item',
                                content: [
                                    {
                                        elem: 'latest',
                                        content: 'Поповнення:'
                                    },
                                    {
                                        block: 'link',
                                        url: '/notes/' + latest._id,
                                        content: latest.title
                                    }
                                ]
                            }
                        ]
                    }
                ]);
            })
        );
    }
});
