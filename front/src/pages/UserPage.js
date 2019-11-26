import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { currentUser } from 'lib/auth';
import { Container } from '@material-ui/core';
import { indigo, grey } from '@material-ui/core/colors';
import {
  fetchMember,
  fetchCommentsOfMember,
  postComment,
  fetchUserAndOwnComments
} from 'lib/api';
import CommentList from 'components/lv4/CommentList';
import CommentForm from 'components/lv4/CommentForm';

export default function (props) {
  const { id } = props.match.params;
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleGetUser = response => {
      console.log(response);
      setUser(response.user);
      setComments(response.comments);
      setLoading(false);
    }
    setLoading(true);
    fetchUserAndOwnComments(id, handleGetUser);
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <h2>{user.email}</h2>
      <ul>
        {comments.map(comment => (<li>{comment.detail}</li>))}
      </ul>
    </div>
  );
}