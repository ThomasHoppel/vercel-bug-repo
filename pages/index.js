export default function HomePage() {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const dummyVar = process.env.NEXT_PUBLIC_DUMMY_TEST_VARIABLE;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Vercel Environment Variable Test</h1>
      <p>This page tests if Vercel is injecting the correct environment variables at build time.</p>
      <hr />
      <h2>Client-Side Value:</h2>
      <p><strong>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:</strong></p>
      <pre style={{ background: '#eee', padding: '1rem' }}>{stripeKey || 'Result: undefined'}</pre>
      
      <h2>Client-Side Value:</h2>
      <p><strong>NEXT_PUBLIC_DUMMY_TEST_VARIABLE:</strong></p>
      <pre style={{ background: '#eee', padding: '1rem' }}>{dummyVar || 'Result: undefined'}</pre>
    </div>
  );
}

export async function getStaticProps() {
  console.log(
    '[Build Log] Reading NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:',
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  console.log(
    '[Build Log] Reading NEXT_PUBLIC_DUMMY_TEST_VARIABLE:',
    process.env.NEXT_PUBLIC_DUMMY_TEST_VARIABLE
  );
  
  return {
    props: {},
  };
}