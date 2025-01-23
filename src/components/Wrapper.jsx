const Wrapper = ({ children }) => {
    return (
      <div
        className="wrapper"
        style={{
          padding: '20px',
          border: '2px solid #ccc',
          borderRadius: '8px',
          display: 'flex', // Add flex display
          justifyContent: 'center', // Center the cards horizontally
          gap: '2rem', // Space between the cards
          flexWrap: 'wrap', // Allow wrapping for smaller screens
        }}
      >
        {children}
      </div>
    );
  };
  
  export default Wrapper;
  