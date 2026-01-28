interface IDish {
    title: string;
    imageSrc: string;
    price: number;
    ingridients?: TIngridient[];
    description?: string;
}

type TIngridient = {
    title: string;
    optional: boolean;
}

export type { IDish };