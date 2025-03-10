const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/HomePage'>/HomePage</a></td>
            <td style={tableCellStyle}><a href='/HomePage'>home page</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/LoginPage'>/LoginPage</a></td>
            <td style={tableCellStyle}><a href='/LoginPage'>login page</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SignIn'>/SignIn</a></td>
            <td style={tableCellStyle}><a href='/SignIn'>Sign In</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/SignUp'>/SignUp</a></td>
            <td style={tableCellStyle}><a href='/SignUp'>Sign Up</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}