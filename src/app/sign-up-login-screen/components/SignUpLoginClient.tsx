'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Heart, Sparkles, Shield, ArrowRight, Mail } from 'lucide-react';
import AppLogo from '@/components/ui/AppLogo';
import { useAuth } from '@/contexts/AuthContext';
import Icon from '@/components/ui/AppIcon';


interface AuthFormData {
  email: string;
  password: string;
  name?: string;
}

export default function SignInClient() {
  const router = useRouter();
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<AuthFormData>({ email: '', password: '', name: '' });
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      if (mode === 'login') {
        await signIn(formData.email, formData.password);
        setSuccessMsg('Welcome back! ✨');
      } else {
        await signUp(formData.email, formData.password, formData.name);
        setSuccessMsg('Account created! Let\'s begin ✨');
      }
      setTimeout(() => router.push('/home'), 600);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await signIn('demo@heartmap.app', 'demo1234');
      setSuccessMsg('Welcome, Demo User! ✨');
      setTimeout(() => router.push('/home'), 600);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Top Nav */}
      <header className="px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AppLogo size={32} />
          <span className="font-bold text-lg text-foreground tracking-tight">heartmap</span>
        </div>
        <button
          onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(null); }}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {mode === 'login' ? 'New here?' : 'Have an account?'}
        </button>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row items-stretch max-w-screen-lg mx-auto w-full px-4 pb-8 gap-8">
        {/* Left Panel */}
        <div className="lg:flex-1 flex flex-col items-center justify-center pt-6 lg:pt-0">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
            <div className="relative rounded-3xl card-border-glow bg-gradient-card p-6 text-center overflow-hidden">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm rounded-3xl">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                </div>
                <p className="text-sm font-semibold text-foreground">Sign in to reveal</p>
                <p className="text-xs text-muted-foreground mt-1">Your persona is ready</p>
              </div>
              <div className="blur-sm">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center text-3xl">⚓</div>
                <h3 className="text-xl font-bold text-foreground mb-1">The Steady Anchor</h3>
                <div className="flex gap-2 justify-center mt-3">
                  {['Secure', 'Empathetic', 'Consistent'].map((t) => (
                    <span key={t} className="px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover your relationship archetype — sign in to see what we found.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-5">
              {[{ icon: Heart, label: '2.4M personas' }, { icon: Sparkles, label: 'AI-analyzed' }, { icon: Shield, label: 'Private & secure' }].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
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
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground leading-tight">
                {mode === 'login' ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {mode === 'login' ? 'Sign in to see your heartmap results' : 'Join 2.4M people who know their love style'}
              </p>
            </div>

            {successMsg && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                {successMsg}
              </div>
            )}
            {error && (
              <div className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Your name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-foreground">Password</label>
                </div>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={mode === 'signup' ? 'Create a password' : 'Your password'}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-3 pr-11 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-1"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {mode === 'login' ? 'Signing in...' : 'Creating account...'}
                  </>
                ) : (
                  <>
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="relative flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <button
                type="button"
                onClick={handleDemoLogin}
                disabled={isLoading}
                className="w-full py-3 rounded-xl border border-border bg-muted/40 hover:bg-muted/70 text-foreground font-medium text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                Continue as Demo User
              </button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(null); }}
                  className="text-primary font-semibold hover:underline"
                >
                  {mode === 'login' ? 'Sign up free' : 'Sign in'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}