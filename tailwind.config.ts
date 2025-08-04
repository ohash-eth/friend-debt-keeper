import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Xianyu-Inspired Brand Colors */
				'app-yellow': 'hsl(var(--primary-yellow))',
				'app-purple': 'hsl(var(--primary-purple))',
				'app-orange': 'hsl(var(--primary-orange))',
				'app-blue': 'hsl(var(--primary-blue))',
				'app-cream': 'hsl(var(--primary-cream))',
				
				/* Semantic Transaction Colors */
				lent: 'hsl(var(--lent))',
				borrowed: 'hsl(var(--borrowed))',
				overdue: 'hsl(var(--overdue))',
				'filter-highlight': 'hsl(var(--filter-highlight))',
				
				/* Text Hierarchy */
				'text-primary': 'hsl(var(--text-primary))',
				'text-secondary': 'hsl(var(--text-secondary))',
				'text-muted': 'hsl(var(--text-muted))',
				'text-disabled': 'hsl(var(--text-disabled))',
				
				/* Background Variations */
				'bg-secondary': 'hsl(var(--background-secondary))',
				'bg-tertiary': 'hsl(var(--background-tertiary))',
				'bg-card-gradient': 'var(--background-card)',
				
				/* Tech-Inspired Colors */
				'tech-primary': 'hsl(var(--tech-primary))',
				'tech-secondary': 'hsl(var(--tech-secondary))',
				'tech-accent': 'hsl(var(--tech-accent))',
				'tech-mesh': 'var(--tech-mesh-pattern)',
				
				/* Status Colors */
				'status-unreturned': 'hsl(var(--status-unreturned))',
				'status-returned': 'hsl(var(--status-returned))',
				'status-overdue': 'hsl(var(--status-overdue))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'app-sm': 'var(--radius-sm)',
				'app-lg': 'var(--radius-lg)',
				'app-full': 'var(--radius-full)'
			},
			boxShadow: {
				'card': '0 2px 6px hsl(var(--card-shadow))',
				'fab': '0 4px 8px rgba(0, 0, 0, 0.2)',
				'fab-floating': '0 8px 20px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(142, 68, 173, 0.2)',
				'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
				'tech-card': '0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.05)',
				'tech-elevated': '0 8px 16px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 0, 0, 0.08)',
				'tech-floating': '0 8px 20px rgba(0, 0, 0, 0.1), 0 16px 40px rgba(0, 0, 0, 0.08), 0 4px 8px rgba(142, 68, 173, 0.1)',
				'glow': '0 0 20px rgba(255, 218, 68, 0.4)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
