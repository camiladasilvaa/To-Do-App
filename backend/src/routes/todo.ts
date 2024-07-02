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

// Update a Todo's completed feature by ID
router.put('/:id/toggle', async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Get a Todo by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findByPk(id);

    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: 'Todo not found' });
    }
  } catch (error) {
    console.error('Error fetching todo:', error);
    res.status(500).json({ error: 'Error fetching todo' });
  }
});

router.get('/albums/:id', async (req: Request, res: Response) => {
  const albumId = req.params.id;

  try {
    const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the album details' });
  }
});

export default router;
