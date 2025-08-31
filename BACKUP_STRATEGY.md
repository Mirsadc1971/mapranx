# MapRanx Backup Strategy

## Auto-Save Git Commits
To prevent losing work, we'll commit changes frequently:

### Quick Save Commands
```bash
# Quick save all changes
git add -A && git commit -m "Auto-save: $(date)" && git push

# Create backup branch
git checkout -b backup-$(date +%Y%m%d-%H%M%S)
git push origin backup-$(date +%Y%m%d-%H%M%S)
```

## Features We Need to Rebuild
Based on our discussion today, MapRanx should have:

1. **NAP Tracking System**
   - Name, Address, Phone tracking for businesses
   - Location-based search functionality
   - Multiple location management

2. **Scan & Points System**
   - Trial: $8.77 (100 points)
   - Starter: $18.77/mo (500 points)
   - Professional: $38.77/mo (2,000 points)
   - Agency: $98.77/mo (5,000 points)

3. **Core Features**
   - Google Maps rank tracking
   - Hyperlocal search (ZIP code level)
   - Heat map visualizations
   - Competitor tracking
   - White-label reports
   - API access

4. **Dashboard Pages Needed**
   - `/dashboard` - Overview with metrics
   - `/dashboard/scan` - New scan interface
   - `/dashboard/locations` - Manage tracked locations
   - `/dashboard/reports` - View and export reports
   - `/dashboard/heatmap` - Visual rank distribution
   - `/dashboard/competitors` - Track competitors
   - `/dashboard/settings` - Account settings

## Current Status
- ✅ Homepage with $8.77 offer
- ✅ Pricing page with Stripe integration
- ✅ Basic dashboard layout
- ❌ NAP tracking functionality
- ❌ Scan system
- ❌ Real data integration
- ❌ Reports generation
- ❌ Heatmap visualization

## Next Steps
1. Implement scan functionality
2. Add location management
3. Create reporting system
4. Add heatmap visualization
5. Connect to real data sources