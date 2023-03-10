import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gowaste',
  title: 'GoWaste',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'name',
    //   title: 'Name',
    //   type: 'string',
    // }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),

    defineField({
      name: 'driver',
      title: 'Driver Contions',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'agent',
      title: 'Agent Contions',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'cusc',
      title: 'Customer conditions',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook link',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'instagram Link',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter Link',
      type: 'string',
    }),
    defineField({
      name: 'playstore',
      title: 'Playstore Link',
      type: 'string',
    }),
    defineField({
      name: 'appstore',
      title: 'App Store Link',
      type: 'string',
    }),
  ],
})
