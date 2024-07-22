export type ProductItem = {
    title?: string;
    content: string;
};
export interface ProductHighLightProps {
    imageAlignment?: 'left' | 'right';
    productImageSrc: string;
    imageAlt: string;
    productDetails: ProductItem[];
    buttonText: string;
    buttonTitle?: string;
}
//# sourceMappingURL=product-highlight.interface.d.ts.map