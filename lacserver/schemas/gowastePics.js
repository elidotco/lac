import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'gowastepics',
  title: 'GoWastePics',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
