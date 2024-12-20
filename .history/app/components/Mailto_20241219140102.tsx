const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
  };
  
  ReactDOM.render(
    <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
      Mail me!
    </Mailto>,
    document.getElementById('root')
  );