import { IDish } from 'models/dish';

export const dishes: IDish[] = [
    {
        id: 1,
        title: 'Яичница',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmPOTZxE6AMrZeKn9hMmZwBNXH9hm_7g_7pM22hq-xcGrK2BS5pGe4WEtF-G7DW6QJa46vZGmQd__EJeV6sCExxrnwxTwMriYwkMIqrZQ&s=10',
        price: 150,
        description: 'яйца, соль, кетчуп',
    },
    {
        id: 2,
        title: 'Омлет',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkjz7BEjOQoiEF1UlmtnooL7QCOnmVaDhts4efVY7cJZ6EJFPlWZMFdSjqHVxf6RCZMMbi9z9xtk3tRbhP_ud0CwtURz0tChQQWp1DotZ&s=10',
        price: 170,
        description: 'так же как в яичнице только в смятку',
    },
    {
        id: 3,
        title: 'Блины',
        imageSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G-Cv5eF4YTIA_aGGMz_HUTmnQf41WrkLTCwp8gaP4kT-5JuKlOKdKZxORdjG5ij5IdtXERhLrRfgSzYWsmkS3nEpYxogUBzUxUJjphD9&s=10',
        price: 220,
        description: 'мука, молоко, яйца, масло',
    },
    {
        id: 4,
        title: 'Овсянка',
        imageSrc:
            'https://menunedeli.ru/wp-content/uploads/2018/01/Zharenaja-ovsjanka-s-jajcom-500x350-1000x667.jpg',
        price: 80,
        description: 'овсяные хлопья, молоко, яйцо',
    },
    {
        id: 5,
        title: 'Сырники',
        imageSrc:
            'https://images.unian.net/photos/2021_02/thumb_files/1200_0_1613373803-2196.jpg',
        price: 100,
        description: 'сыр, яйца, мука, молоко',
        ingridients: [
            {
                title: 'сыр',
                optional: false,
            },
            {
                title: 'яйца',
                optional: false,
            },
            {
                title: 'укроп',
                optional: true,
            },
        ],
    },
];
