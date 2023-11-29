import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ children, className, maxWidth, maxHeight, fullWidth, ...props }: import("./table.interface").TableProps) => import("react/jsx-dev-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        children: {
            control: {
                disable: boolean;
            };
        };
    };
    parameters: {
        a11y: {
            disable: boolean;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const AlignLeft: Story;
export declare const AlignCenter: Story;
export declare const AlignRight: Story;
export declare const FixedSize: Story;
export declare const FullWidth: Story;
//# sourceMappingURL=Table.stories.d.ts.map