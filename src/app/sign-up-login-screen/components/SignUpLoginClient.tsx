'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Heart, Sparkles, Shield, Copy, Check, ArrowRight, Mail } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import { Toaster, toast } from 'sonner';
import Icon from '@/components/ui/AppIcon';


interface AuthFormData {
  email: string;
  password: string;
  name?: string;
  rememberMe?: boolean;
}

const DEMO_CREDENTIALS = [
  { role: 'Explorer', email: 'priya.sharma@lovepersona.app', password: 'Priya@2026' },
  { role: 'Premium', email: 'arjun.mehta@lovepersona.app', password: 'Arjun@2026' },
];

const PERSONA_TEASER = {
  name: 'The Steady Anchor',
  emoji: '⚓',
  gradient: 'from-rose-500 to-violet-500',
  traits: ['Secure', 'Empathetic', 'Consistent'],
};

export default function SignUpLoginClient() {
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<AuthFormData>();

  const handleCopy = async (value: string, field: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const autofill = (cred: typeof DEMO_CREDENTIALS[0]) => {
    setValue('email', cred.email);
    setValue('password', cred.password);
    toast.success(`Filled ${cred.role} credentials`);
  };

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    // BACKEND INTEGRATION: POST /api/auth/login or /api/auth/signup
    await new Promise((r) => setTimeout(r, 1400));

    const validCred = DEMO_CREDENTIALS.find(
      (c) => c.email === data.email && c.password === data.password
    );

    if (!validCred && mode === 'login') {
      setIsLoading(false);
      setError('email', {
        message: 'Invalid credentials — use the demo accounts below to sign in',
      });
      return;
    }

    toast.success(mode === 'login' ? 'Welcome back! ✨' : 'Account created! Let\'s begin ✨');
    setTimeout(() => router.push('/quiz-screen'), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      <Toaster position="top-center" theme="dark" richColors />

      {/* Top Nav */}
      <header className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AppLogo size={32} />
          <span className="font-bold text-lg text-foreground tracking-tight">LovePersona</span>
        </div>
        <button
          onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {mode === 'login' ? 'New here?' : 'Have an account?'}
        </button>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row items-stretch max-w-screen-lg mx-auto w-full px-4 pb-8 gap-8">

        {/* Left Panel — Persona Teaser */}
        <div className="lg:flex-1 flex flex-col items-center justify-center pt-6 lg:pt-0">
          <div className="relative w-full max-w-sm mx-auto">
            {/* Ambient glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />

            {/* Blurred persona card */}
            <div className="relative rounded-3xl card-border-glow bg-gradient-card p-6 text-center overflow-hidden">
              {/* Lock overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-600 text-foreground">Sign in to reveal</p>
                <p className="text-xs text-muted-foreground mt-1">Your persona is ready</p>
              </div>

              {/* Blurred content behind */}
              <div className="blur-premium">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-3xl">
                  {PERSONA_TEASER.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{PERSONA_TEASER.name}</h3>
                <div className="flex gap-2 justify-center mt-3">
                  {PERSONA_TEASER.traits.map((t) => (
                    <span key={`trait-${t}`} className="px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
            </div>

            {/* Hook copy */}
            <div className="mt-5 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                You answered <span className="text-foreground font-semibold">8 questions</span>. Your Love Persona is waiting — sign in to see what we found.
              </p>
            </div>

            {/* Trust signals */}
            <div className="mt-4 flex items-center justify-center gap-5">
              {[
                { icon: Heart, label: '2.4M personas' },
                { icon: Sparkles, label: 'AI-analyzed' },
                { icon: Shield, label: 'Private & secure' },
              ].map(({ icon: Icon, label }) => (
                <div key={`trust-${label}`} className="flex flex-col items-center gap-1">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-[10px] text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel — Auth Form */}
        <div className="lg:flex-1 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">

            {/* Heading */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                {mode === 'login' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {mode === 'login' ?'Sign in to see your Love Persona results' :'Join 2.4M people who know their love style'}
              </p>
            </div>

            {/* Social Auth */}
            <div className="flex flex-col gap-3 mb-5">
              <button
                type="button"
                onClick={() => toast.info('Google auth — connect backend OAuth provider')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 hover:bg-muted transition-all duration-200 text-sm font-medium text-foreground active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                onClick={() => toast.info('Apple auth — connect backend OAuth provider')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 hover:bg-muted transition-all duration-200 text-sm font-medium text-foreground active:scale-95"
              >
                <svg className="w-4 h-4 fill-foreground" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your name
                  </label>
                  <input
                    {...register('name', {
                      required: mode === 'signup' ? 'Name is required' : false,
                    })}
                    type="text"
                    placeholder="Priya"
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Enter a valid email address',
                      },
                    })}
                    type="email"
                    placeholder="you@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-foreground">
                    Password
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => toast.info('Password reset — connect backend email service')}
                      className="text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <input
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={mode === 'signup' ? 'Create a password' : 'Your password'}
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400 mt-1">{errors.password.message}</p>
                )}
              </div>

              {mode === 'login' && (
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    {...register('rememberMe')}
                    type="checkbox"
                    className="w-4 h-4 rounded border-border bg-input accent-primary"
                  />
                  <span className="text-sm text-muted-foreground">Remember me for 30 days</span>
                </label>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed pulse-glow mt-1"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  <>
                    {mode === 'login' ? 'Reveal My Persona' : 'Start My Journey'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Mode switch */}
            <p className="text-center text-sm text-muted-foreground mt-4">
              {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
              <button
                type="button"
                onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                className="text-primary font-semibold hover:underline"
              >
                {mode === 'login' ? 'Sign up free' : 'Sign in'}
              </button>
            </p>

            {/* Terms */}
            {mode === 'signup' && (
              <p className="text-center text-[11px] text-muted-foreground mt-3 leading-relaxed">
                By signing up, you agree to our{' '}
                <button type="button" className="text-primary/80 hover:underline">Terms of Service</button>
                {' '}and{' '}
                <button type="button" className="text-primary/80 hover:underline">Privacy Policy</button>
              </p>
            )}

            {/* Demo Credentials */}
            <div className="mt-6 rounded-xl bg-muted/40 border border-border p-4">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Demo Accounts
              </p>
              <div className="flex flex-col gap-2">
                {DEMO_CREDENTIALS.map((cred) => (
                  <div
                    key={`cred-${cred.role}`}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold mr-2">
                        {cred.role}
                      </span>
                      <span className="text-xs text-muted-foreground truncate">{cred.email}</span>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleCopy(cred.email, `email-${cred.role}`)}
                        className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Copy email"
                      >
                        {copiedField === `email-${cred.role}` ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-muted-foreground" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => autofill(cred)}
                        className="px-2.5 py-1 rounded-lg bg-secondary hover:bg-muted border border-border text-[10px] font-semibold text-foreground transition-all active:scale-95"
                      >
                        Use
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}