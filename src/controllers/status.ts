import { request, Request, Response } from 'express';

export let hi = (req: Request, res: Response) => {

    res.send("Hello");
}


export let awsome = (req: Request, res: Response) => {

    res.send("Everything is awsome");
}


