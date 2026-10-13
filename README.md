# Drag & Drop Note

### Challenge & Solution

Building a free-form, spatial note-taking application presents a unique challenge compared to traditional, linear to-do lists. The primary goal was to create an unconstrained digital canvas where users can intuitively organize their thoughts by dragging and dropping notes anywhere on the screen. However, granting users this level of spatial freedom requires an interface that feels completely natural, responsive, and devoid of the rigid structures that often disrupt the creative brainstorming process.

From a technical perspective, implementing a dynamic drag-and-drop system introduces significant complexity in rendering and state management. Continuously tracking the exact coordinates, content, and depth of multiple independent notes can easily lead to performance bottlenecks. The core technical hurdle was finding a way to handle rapid interactions and continuous positional updates without triggering expensive, application-wide re-renders, while also making sure that user layouts are not lost during page reloads.

To solve these issues, the project was developed using React and Vite for a highly optimized and fast front-end experience. We leveraged Zustand for state management, efficiently handling the constant shifting of note coordinates to ensure drag-and-drop actions remain perfectly smooth without unnecessary rendering overhead. This robust architecture, combined with strict local storage persistence, ensures that users have a reliable, fluid, and persistent environment for spatial thought organization.

- Vite
- React
- Zustand
- pnpm
- Permanent local storage
  
![Screenshot_153](https://github.com/prog-ops/dragdropnote/assets/59245989/7e853ac4-32e4-4a37-a6ac-6a027f0f3a0b)

![Screenshot_154](https://github.com/prog-ops/dragdropnote/assets/59245989/f563c419-6001-410c-95f2-bd104abf5f05)

![Screenshot_155](https://github.com/prog-ops/dragdropnote/assets/59245989/6222c1de-11c0-45c5-9b41-c8efb4bf6989)
