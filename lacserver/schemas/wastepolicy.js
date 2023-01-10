import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gowastepolicy',
  title: 'GoWastePolicy',
  type: 'document',
  fields: [
    defineField({
      name: 'driver',
      title: 'Driver Privacy Policy',
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
      title: 'Agent Privacy Policy',
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
      title: 'Customer Privacy Policy',
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
