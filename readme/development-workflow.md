# Development Workflow

## Overview

This document outlines the standard development workflow and branching strategy to ensure consistent, reliable deployments and maintain code quality across our project.

## Branch Structure

Our repository uses a two-branch workflow:

- **`main`** - Production branch containing stable, release-ready code
- **`testing`** - Development branch for implementing and testing new features

## Development Workflow

To maintain code quality and prevent production issues, all development should follow this standardized process:

### 1. Development Phase
- ****Always develop on the **`testing`** branch****
- Implement your code changes and commit regularly with clear messages
- **Use semantic commit messages** with the following prefixes:
  - `fix:` for bug fixes
  - `feat:` for new features
  - `chore:` for maintenance tasks, dependencies, or other non-feature changes
- **Keep commits concise and focused** - each commit should address a single change or issue
- **Avoid grouping multiple unrelated changes** in a single commit - break them into separate commits for better tracking and easier rollbacks

### 2. Testing & Verification
- Thoroughly test your implementation on the `testing` branch
- Verify all functionality works as expected
- Ensure no breaking changes are introduced

### 3. Design Review (if applicable)
- Contact the design team for UI/UX review when needed
- Implement any design feedback before proceeding
- Ensure visual elements meet design standards

### 4. Production Deployment
- Once testing is complete and approved, merge `testing` into `main`
- This brings all verified implementations to the production environment
- Monitor the deployment for any issues

## Important Guidelines

### ⚠️ Direct Main Branch Development
- **Avoid writing code directly on the `main` branch** unless absolutely necessary
- If emergency changes are made to `main`, immediately merge back to `testing` to keep branches synchronized
- This ensures both branches remain up-to-date and prevents conflicts

### Best Practices
- Keep commits atomic and well-documented
- Test thoroughly before merging to production
- Communicate with team members about significant changes
- Maintain branch synchronization between `testing` and `main`

## Quick Reference

```bash
# Standard workflow commands
git checkout testing
git pull
# Make your changes
git add .
git commit -m "feat: Clear description of changes"
git push

# After testing and approval
git checkout main
git merge testing
git push

# If emergency changes made to main
git checkout testing
git merge main
git push
```