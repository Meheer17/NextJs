import connect from '../../components/db'

connect();

export default async (req, res) => {
  res.json({test:'test'})
}