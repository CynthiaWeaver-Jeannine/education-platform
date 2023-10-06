import './globals.css'
import { Inter } from 'next/font/google'
import '../styles/navbar.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className="header">
        <img src="/images/logo.png" alt="Logo" width="70" height="70" />
        <nav className="nav">
          <ul>
            <li className="list-item">
              <a href="/community" className="link">
                <img src="/images/community.png" alt="Community" className="logo" />
                <div>Community</div>
              </a>
            </li>
            <li className="list-item">
              <a href="/calendar" className="link">
                <img src="/images/calender.png" alt="Calendar" className="logo" />
                <div>Calendar</div>
              </a>
            </li>
            <li className="list-item">
              <a href="/myCourses" className="link">
                <img src="/images/courses.png" alt="Courses" className="logo" />
                <div>My Courses</div>
              </a>
            </li>
            <li className="list-item">
              <a href="/notifications" className="link">
                <img src="/images/notifications.png" alt="Notifications" className="logo" />
                <div>Notifications</div>
              </a>
            </li>
            <li className="list-item">
              <a href="/profile" className="link">
                <img src="/images/profile.png" alt="Profile" className="logo" />
                <div>Profile</div>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {children}</body>
    </html>
  );
}
