module.exports = ({incoming}) => {
  const { path } = incoming;

  const pathRelatedThings = {
    'post-to-twitter': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'post-to-facebook': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'get-tweet': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'get-facebook-post': () => {
      return `I don't do this yet, but I will soon!`;
    },
    'get-reddit-post': () => {
      return `I don't do this yet, but I will soon!`;
    }
  };

  // Do path related things
  // ----------------------
  if(path != null && pathRelatedThings[path]) return pathRelatedThings[path]();

  return `Hey, I'll post or fetch social media for you about that thing you wanted.`;
};