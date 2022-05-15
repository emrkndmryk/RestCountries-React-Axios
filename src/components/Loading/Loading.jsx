import styles from './Loading.module.scss'
import Container from 'react-bootstrap/Container'
import { Col, Row } from 'react-bootstrap'

function Loading() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={2}>
          <div className={styles.loader}></div>
        </Col>
      </Row>
    </Container>
  )
}

export default Loading
