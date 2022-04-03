import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
    title: "Components/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = React.useState(
        args.error ? "ErrorInputDemo" : ""
    );
    return (
        <div style={{ padding: "24px" }}>
            <Input
                {...args}
                value={value}
                onChange={(e) => {
                    args.error ? value : setValue(e.target.value);
                }}
            />
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    name: "username",
    type: "text",
    placeholder: "GoBigOrGoHome",
    error: false,
    label: "Username",
    formGroup: "demo",
};

export const Error = Template.bind({});
Error.args = {
    name: "username",
    type: "text",
    placeholder: "GoBigOrGoHome",
    error: true,
    label: "Username",
    formGroup: "demo",
};
