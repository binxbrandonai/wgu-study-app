# D120 OA Competency Breakdown Update

**Date:** June 5, 2026
**Updated by:** Hermes Agent

## Summary

Successfully updated the WGU study app and D120 notebook with the official OA competency breakdown for D120: Special Populations & Advanced Primary Care.

## Changes Made

### 1. Study App (index.html)

#### Added Competency Data Structure
Added a new `OA_COMPETENCIES` object containing the official breakdown:

```javascript
const OA_COMPETENCIES = {
  D120: [
    { area: "Women's Health", percentage: 22 },
    { area: "Care of the Pregnant Patient", percentage: 14 },
    { area: "Men's Health", percentage: 8 },
    { area: "Care of the LGBTQIA Community", percentage: 11 },
    { area: "Care of the Older Adult", percentage: 20 },
    { area: "Care in Special Populations", percentage: 15 },
    { area: "Coordination with Specialty Practices and Inpatient Care", percentage: 10 }
  ]
};
```

#### Added UI Components
- Created a new competency breakdown section that displays when viewing D120
- Added visual progress bars showing the percentage breakdown for each competency area
- Positioned the breakdown between the course title and topic filter chips

#### Added CSS Styles
- `.competency-section` - Container styling matching the app's dark theme
- `.competency-bar-item` - Individual competency row with label, progress bar, and percentage
- `.competency-bar-track` and `.competency-bar-fill` - Animated progress bars
- Color scheme uses accent3 (#4ecdc4) to match D120's theme color

#### Updated JavaScript Logic
Modified the `selectCourse()` function to:
- Check if competencies exist for the selected course
- Dynamically generate and display competency bars
- Show/hide the competency section based on data availability
- Only D120 shows competencies currently (easy to add for D118/D119 later)

### 2. Study Guide (D120-study-guide.md)

Added official competency breakdown at the top of the document with:
- Percentage breakdown for all 7 competency areas
- Approximate question counts (out of 60 total)
- Study strategy note highlighting that Women's Health + Care of the Older Adult = 42% of exam

## How to Use

1. **In the Study App:**
   - Click on the D120 course card from the home screen
   - The competency breakdown now appears below the course title
   - Use this to understand the weight of each topic area on the OA
   - The breakdown is always visible when in the D120 course menu

2. **In the Study Guide:**
   - The competency breakdown is now at the top of the markdown file
   - Use it as a reference when planning study sessions
   - Focus more time on high-percentage areas (Women's Health: 22%, Older Adult: 20%)

## Visual Design

The competency bars feature:
- Clean horizontal bar chart layout
- Teal accent color (#4ecdc4) matching D120's branding
- Smooth width animations when the view loads
- Clear labels and percentages for easy scanning
- Responsive design that works on all screen sizes

## Testing Recommendation

1. Open index.html in a browser
2. Click the D120 course card
3. Verify the competency breakdown displays correctly with 7 bars
4. Check that D118 and D119 don't show the competency section (not implemented yet)
5. Review the updated D120-study-guide.md for the breakdown text

## Future Enhancements

Easy to add competency breakdowns for D118 and D119 by:
1. Adding their data to the `OA_COMPETENCIES` object
2. No other code changes needed - the UI automatically shows/hides based on data presence

## Files Modified

- `/Users/binx/wgu-study-app/index.html` - Added competency data, UI, CSS, and logic
- `/Users/binx/wgu-study-app/D120-study-guide.md` - Added competency breakdown section

## Technical Details

- Total questions per OA: 60
- Percentage calculations are exact from WGU's official breakdown
- Approximate question counts rounded to nearest whole number
- UI uses CSS custom properties (CSS variables) for consistent theming
- JavaScript uses template literals for clean HTML generation
- Competency bars animate on display for better UX
