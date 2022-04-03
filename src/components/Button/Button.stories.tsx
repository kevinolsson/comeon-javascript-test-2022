import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
    title: "Components/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <div style={{ padding: "24px" }}>
        <Button
            {...args}
            onClick={() => {
                alert("Hello!");
            }}
        />
    </div>
);

export const RegularPrimaryFilled = Template.bind({});
RegularPrimaryFilled.args = {
    label: "Button",
    size: "regular",
    variant: "filled",
    color: "primary",
};

export const RegularWhiteFilled = Template.bind({});
RegularWhiteFilled.args = {
    label: "Button",
    size: "regular",
    variant: "filled",
    color: "white",
};

export const RegularDarkFilled = Template.bind({});
RegularDarkFilled.args = {
    label: "Button",
    size: "regular",
    variant: "filled",
    color: "dark",
};

export const RegularPrimaryOutlined = Template.bind({});
RegularPrimaryOutlined.args = {
    label: "Button",
    size: "regular",
    variant: "outlined",
    color: "primary",
};

export const RegularWhiteOutlined = Template.bind({});
RegularWhiteOutlined.args = {
    label: "Button",
    size: "regular",
    variant: "outlined",
    color: "white",
};

export const RegularDarkOutlined = Template.bind({});
RegularDarkOutlined.args = {
    label: "Button",
    size: "regular",
    variant: "outlined",
    color: "dark",
};

export const SmallPrimaryFilled = Template.bind({});
SmallPrimaryFilled.args = {
    label: "Button",
    size: "small",
    variant: "filled",
    color: "primary",
};

export const SmallWhiteFilled = Template.bind({});
SmallWhiteFilled.args = {
    label: "Button",
    size: "small",
    variant: "filled",
    color: "white",
};

export const SmallDarkFilled = Template.bind({});
SmallDarkFilled.args = {
    label: "Button",
    size: "small",
    variant: "filled",
    color: "dark",
};

export const SmallPrimaryOutlined = Template.bind({});
SmallPrimaryOutlined.args = {
    label: "Button",
    size: "small",
    variant: "outlined",
    color: "primary",
};

export const SmallWhiteOutlined = Template.bind({});
SmallWhiteOutlined.args = {
    label: "Button",
    size: "small",
    variant: "outlined",
    color: "white",
};

export const SmallDarkOutlined = Template.bind({});
SmallDarkOutlined.args = {
    label: "Button",
    size: "small",
    variant: "outlined",
    color: "dark",
};
