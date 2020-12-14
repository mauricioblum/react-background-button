import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { BackgroundButton, BackgroundButtonProps } from '..'

export default {
  title: 'BackgroundButton',
  component: BackgroundButton
} as Meta

const Template: Story<BackgroundButtonProps> = (args) => (
  <BackgroundButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image:
    'https://aeutas.org.au/wp-content/uploads/2019/08/Rainbow-button-BG.jpg',
  children: 'Button text'
}

export const Cover = Template.bind({})
Cover.args = {
  image: 'https://labs.phaser.io/assets/sprites/button-bg.png',
  children: 'Button text',
  mode: 'cover',
  width: 270,
  height: 90
}

export const CustomStyles = Template.bind({})
CustomStyles.args = {
  image: 'https://labs.phaser.io/assets/sprites/button-bg.png',
  children: 'Button text',
  mode: 'cover',
  customStyles: {
    fontSize: 24,
    color: '#ff9000',
    cursor: 'move',
    width: '100%',
    height: '100%'
  }
}
