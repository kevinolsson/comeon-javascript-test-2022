import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AppWrapper } from "./AppWrapper";

export default {
    title: "Components/AppWrapper",
    component: AppWrapper,
} as ComponentMeta<typeof AppWrapper>;

const Template: ComponentStory<typeof AppWrapper> = (args) => (
    <AppWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: <div />,
};
