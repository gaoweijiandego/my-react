// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      // 处理 GET 请求
    
      res.status(200).json({ message: 'Hello from GET API!', name: 'joker' });
      break;
    case 'POST':
      // 处理 POST 请求
      const { name } = req.body; // 从请求体中获取数据
      console.log(name,'dasdasda')
      res.status(200).json({ message: `Hello, ${name}!`, name: name });
      break;
    case 'PUT':
      // 处理 PUT 请求
      res.status(200).json({ message: 'Hello from PUT API!' });
      break;
    case 'DELETE':
      // 处理 DELETE 请求
      res.status(200).json({ message: 'Hello from DELETE API!' });
      break;
    default:
      // 处理不支持的方法
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
