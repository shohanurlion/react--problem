import './Blog.css'
import Card from 'react-bootstrap/Card';
import { MdArrowRightAlt } from "react-icons/md";
function Blog(props) {
  return (
   <>
<Card style={{ width: '25rem' }}>
      <Card.Img className='img' src={props.imges} />
      <Card className='cardbody'>
        <span className='date'>{props.data}</span>
        <Card className='cardTitle'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</Card>
        <Card className='cardptag'>
        See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract
        </Card>
        <a href="" className='blgbtn'>Read More <MdArrowRightAlt className='iconarry'/></a>
      </Card>
    </Card>
   </>
  )
}
export default Blog;