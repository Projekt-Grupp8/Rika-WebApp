import React from 'react'

function UserProfile({ onLogout }) {
  return (
    <section>
        <div className="container">
            <h1>Logout</h1>
            <button href="/logout" onClick={onLogout}>
                Logout
            </button>
        </div>
    </section>
  )
}
export default UserProfile;