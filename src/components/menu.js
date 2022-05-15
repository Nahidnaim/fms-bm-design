export const menuItems = [
    // {
    //     id: 1,
    //     label: "menuitems.menu.text",
    //     isTitle: true
    // },
    {
        id: 8,
        label: "Dashboard",
        icon: "bx-home-circle",
        link: "/"
    },
    {
        id: 2,
        label: "Background",
        icon: "bx-home-circle",
        subItems: [
            {
                id: 3,
                label: "What is FMS?",
                link: "/what-is-fms",
                parentId: 2
            },
            {
                id: 4,
                label: "Why Shanta?",
                link: "/why-shanta",
                parentId: 2
            }
        ]
    },
    {
        id: 6,
        isLayout: true
    },
    {
        id: 7,
        label: "menuitems.apps.text",
        isTitle: true
    },
    // {
    //     id: 8,
    //     label: "menuitems.calendar.text",
    //     icon: "bx-calendar",
    //     link: "/"
    // },
    {
        id: 47,
        label: "Policies",
        icon: "bx-user-circle",
        subItems: [
            {
                id: 48,
                label: "Building Manual",
                link: "/policies/building-manual",
                parentId: 47
            },
            {
                id: 49,
                label: "By Laws",
                link: "/policies/by-laws",
                parentId: 47
            },
            {
                id: 50,
                label: "Do & Donts",
                link: "/policies/do-donts",
                parentId: 47
            },
            {
                id: 51,
                label: "Warranty/Maintainance policy",
                link: "/policies/maintainance",
                parentId: 47
            },
        ]
    },
    {
        id: 52,
        label: "Supplier",
        icon: "bx-user-circle",
        subItems: [
            {
                id: 53,
                label: "FM Service",
                link: "/supplier/fm-service",
                parentId: 52
            },
            {
                id: 54,
                label: "MEP Service",
                link: "/supplier/mep-service",
                parentId: 52
            },
            {
                id: 55,
                label: "Others",
                link: "/supplier/others",
                parentId: 52
            }
        ]
    },
    {
        id: 56,
        label: "Task",
        icon: "bx-user-circle",
        subItems: [
            {
                id: 57,
                label: "Task List",
                link: "/task/list",
                parentId: 56
            },
            {
                id: 58,
                label: "Create Task",
                link: "/task/create",
                parentId: 56
            },
        ]
    }
];

