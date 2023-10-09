import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
  addTask: (title, state) =>
      set(store => (
          { tasks: [...store.tasks, { title, state }] }),
          false,
          'addTask'
      ),
  deleteTask: (title) =>
      set(store => ({ tasks: store.tasks.filter(task => task.title !== title), })),
  draggedTask: null,
  setDraggedTask: title => set({ draggedTask: title }),
  moveTask: (title, state) =>
      set(store => ({
        tasks: store.tasks.map(task => (task.title === title ? {title, state} : task))
      }))
})

const log = (config) => (set, get, api) =>
    config(
        (...args) => {
          console.log(args);
          set(args);
        },
        get,
        api
    )

export const useStore = create(persist(devtools(store), { name: 'store' }))
