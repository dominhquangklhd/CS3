powershell -Command "Start-Process cmd -ArgumentList '/c cd backend && docker-compose up -d'"
powershell -Command "Start-Process cmd -ArgumentList '/c cd backend/resource-info && npm start'"
powershell -Command "Start-Process cmd -ArgumentList '/c cd backend/status-management && npm start'"
powershell -Command "Start-Process cmd -ArgumentList '/c cd backend/traffic-info && npm start'"
powershell -Command "Start-Process cmd -ArgumentList '/c cd frontend && npm start'"
