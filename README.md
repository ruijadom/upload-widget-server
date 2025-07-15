## 🔒 File Upload Security

- **File Type Validation**: Only allows specific image formats (JPEG, PNG, WebP)
- **File Size Limits**: Maximum 2MB per file
- **Filename Sanitization**: Removes special characters from filenames
- **Unique Storage Keys**: Generates UUID-based keys to prevent conflicts

## 🚀 Deployment

1. **Build the application**

   ```bash
   pnpm run build
   ```

2. **Set production environment variables**
3. **Run database migrations**

   ```bash
   pnpm run db:migrate
   ```

4. **Start the production server**
   ```bash
   node dist/infra/http/server.js
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
