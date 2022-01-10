/**
 *
 * @param {String} textContent text of the comment
 * @param {String} currentUser user that made the comment
 * @returns
 */ const generateCommentTemplate = (textContent, currentUser) => {
  return {
    id: Math.random(),
    content: textContent,
    createdAt: new Date().toLocaleDateString('en-US'),
    score: 0,
    user: {
      username: currentUser,
    },
    replies: [],
  };
};

export default generateCommentTemplate;
