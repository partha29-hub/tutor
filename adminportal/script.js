// Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Navigation handling
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = item.getAttribute('data-section');
            
            // Update active states
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Mock data for users
    const mockUsers = [
        { name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'Faculty', status: 'Active' },
        { name: 'Bob Wilson', email: 'bob@example.com', role: 'Student', status: 'Inactive' },
    ];

    // Populate user table
    const userTableBody = document.getElementById('userTableBody');
    if (userTableBody) {
        mockUsers.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="status ${user.status.toLowerCase()}">${user.status}</span></td>
                <td>
                    <button class="btn secondary">Edit</button>
                    <button class="btn secondary">Delete</button>
                </td>
            `;
            userTableBody.appendChild(row);
        });
    }

    // Mock data for courses
    const mockCourses = [
        {
            title: 'Introduction to Computer Science',
            instructor: 'Dr. Sarah Johnson',
            students: 156,
            status: 'Active'
        },
        {
            title: 'Advanced Mathematics',
            instructor: 'Prof. Michael Chen',
            students: 89,
            status: 'Active'
        }
    ];

    // Populate course grid
    const courseGrid = document.getElementById('courseGrid');
    if (courseGrid) {
        mockCourses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="stat-card">
                    <h3>${course.title}</h3>
                    <p>Instructor: ${course.instructor}</p>
                    <p>Students: ${course.students}</p>
                    <p>Status: ${course.status}</p>
                    <div class="course-actions">
                        <button class="btn secondary">Edit</button>
                        <button class="btn secondary">View Details</button>
                    </div>
                </div>
            `;
            courseGrid.appendChild(courseCard);
        });
    }

    // Mock announcements
    const mockAnnouncements = [
        {
            title: 'System Maintenance',
            content: 'Scheduled maintenance this weekend',
            date: '2024-03-15',
            target: 'All Users'
        },
        {
            title: 'New Course Available',
            content: 'New programming course starting next week',
            date: '2024-03-14',
            target: 'Students'
        }
    ];

    // Populate announcements
    const announcementList = document.getElementById('announcementList');
    if (announcementList) {
        mockAnnouncements.forEach(announcement => {
            const announcementCard = document.createElement('div');
            announcementCard.className = 'stat-card';
            announcementCard.innerHTML = `
                <h3>${announcement.title}</h3>
                <p>${announcement.content}</p>
                <div class="announcement-meta">
                    <span>Posted: ${announcement.date}</span>
                    <span>Target: ${announcement.target}</span>
                </div>
            `;
            announcementList.appendChild(announcementCard);
        });
    }

    // Handle announcement submission
    const announcementForm = document.querySelector('.announcement-composer');
    if (announcementForm) {
        announcementForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add announcement submission logic here
        });
    }
});

// Simulated real-time updates for monitoring
setInterval(() => {
    const activeUsers = Math.floor(Math.random() * 100) + 50;
    const cpuUsage = Math.floor(Math.random() * 30) + 20;
    const memoryUsage = Math.floor(Math.random() * 40) + 30;

    // Update monitoring stats if elements exist
    const activeUsersElement = document.querySelector('#activeUsersChart');
    if (activeUsersElement) {
        activeUsersElement.textContent = `${activeUsers} users online`;
    }
    

    const resourceElement = document.querySelector('#resourceChart');
    if (resourceElement) {
        resourceElement.innerHTML = `
            <p>CPU: ${cpuUsage}%</p>
            <p>Memory: ${memoryUsage}%</p>
        `;
    }
}, 5000);


const ctx1 = document.getElementById('chart1').getContext('2d');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Users Online',
      data: [12, 19, 8, 15, 22],
      backgroundColor: '#4f46e5',
    }]
  }
});

const ctx2 = document.getElementById('chart2').getContext('2d');
new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Enrollments',
      data: [100, 120, 150, 130],
      backgroundColor: 'rgba(59,130,246,0.4)',
      borderColor: '#3b82f6',
      fill: true,
    }]
  }
});

const ctx3 = document.getElementById('chart3').getContext('2d');
new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Pending', 'Failed'],
    datasets: [{
      label: 'Performance',
      data: [60, 25, 15],
      backgroundColor: ['#10b981', '#facc15', '#ef4444']
    }]
  }
});
