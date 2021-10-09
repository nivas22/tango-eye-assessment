export default {
    items: [
        {
            id: 'charts',
            title: 'Charts',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'bar-chart',
                    title: 'Bar Chart',
                    type: 'item',
                    icon: 'feather icon-bar-chart',
                    url: '/'
                },
                {
                    id: 'Pie-chart',
                    title: 'Pie Chart',
                    type: 'item',
                    icon: 'feather icon-pie-chart',
                    url: '/piechart'
                },
                {
                    id: 'line-chart',
                    title: 'Line Chart',
                    type: 'item',
                    icon: 'feather icon-activity',
                    url: '/linechart'
                },
                {
                    id: 'plot-chart',
                    title: 'Scatter Plot',
                    type: 'item',
                    icon: 'feather icon-more-vertical',
                    url: '/plotchart'
                }
            ]
        }
    ]
}