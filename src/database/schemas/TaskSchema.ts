export const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    title: 'string',
    status: 'string',
    createdAt: 'date',
  },
  primaryKey: '_id',
};
