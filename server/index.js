import { json, send } from 'micro';

const main = async (req, res) => {
  try {
    const body = await json(req);
    console.log('body-----', body)
    send(res, 200, body);
  } catch (error) {
    console.log('error-----', error)
    // if (400 === error.statusCode) {
    send(res, 500, 'Cannot GET "/"');
    // }
  }
}

export default main;