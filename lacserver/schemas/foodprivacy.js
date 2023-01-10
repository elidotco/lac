import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gofoodprivacy',
  title: 'GofoodPrivacy',
  type: 'document',
  fields: [
    defineField({
      name: 'cosc',
      title: 'Courier Privacy',
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
      title: 'Customer Privacy',
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
      name: 'rsc',
      title: 'Resturant Privacy',
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
  ],
})
