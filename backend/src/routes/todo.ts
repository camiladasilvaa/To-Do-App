import { Router, Request, Response } from 'express';
import { Todo } from '../models';


const router = Router();

// Create a new Todo
router.post('/', async (req: Request, res: Response) => {
  console.log("1");
  const { title } = req.body;
  if (!title) {
    console.log("2");
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const todo = await Todo.create({ title, completed: false });
    return res.status(201).json(todo);
  } catch (error) {
    console.log("3");
    return res.status(500).json({ error: 'Error creating todo' });
  }
});

// Get all Todos
router.get('/', async (req: Request, res: Response) => {
    const todos = await Todo.findAll();
    res.json(todos);
});

// Update a Todo by ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title } = req.body;
    const todo = await Todo.findByPk(id);
    if (todo) {
        todo.title = title;
        await todo.save();
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

// Delete a Todo by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    if (todo) {
        await todo.destroy();
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

export default router;
