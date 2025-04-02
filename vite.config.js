import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()], // Подключаем плагин React
	resolve: {
		// alias: {
		// 	// Настройка алиасов для упрощения импортов
		// 	"@": path.resolve(__dirname, "./src"),
		// },
	},
	build: {
		lib: {
			entry: "./src/index.tsx", // Точка входа библиотеки
			name: "Rating", // Глобальное имя для UMD-формата
			fileName: (format) => `my-library.${format}.js`, // Имя выходного файла
		},
		rollupOptions: {
			// Исключаем зависимости из сборки
			external: ["react", "react-dom"],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
		emptyOutDir: false, // Отключаем очистку папки dist
		sourcemap: false, // Генерация source maps
		minify: "esbuild", // Минификация кода
		// terserOptions: {
		// 	compress: {
		// 		drop_console: true, // Удаляет console.log
		// 		unused: true, // Удаляет неиспользуемый код
		// 	},
		// 	format: {
		// 		comments: false, // Удаляет комментарии
		// 	},
		// },
		cssCodeSplit: true, // Разделение CSS
	},
});
