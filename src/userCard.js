import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard