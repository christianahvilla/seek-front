import { Box, Skeleton, Stack, Grid2 } from "@mui/material";

export default function SkeletonComponent() {
  return (
    <Box sx={{ p: 4 }}>
      {/* Page Header Simulation */}
      <Stack direction="row" spacing={2} alignItems="center" mb={4}>
        <Skeleton variant="circular" width={50} height={50} />
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width="40%" height={30} />
          <Skeleton variant="text" width="30%" height={20} />
        </Box>
      </Stack>

      {/* Page Title */}
      <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />

      {/* Content Section - Text */}
      <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="80%" height={20} sx={{ mb: 3 }} />

      {/* Simulated Cards or Grid Items */}
      <Grid2 container spacing={2}>
        {[1, 2, 3].map((item) => (
          <Grid2 size={{ xs: 12, md: 4 }} key={item}>
            <Skeleton variant="rectangular" height={150} />
          </Grid2>
        ))}
      </Grid2>

      {/* Simulated Button Row */}
      <Stack direction="row" spacing={2} mt={4}>
        <Skeleton variant="rectangular" width={100} height={40} />
        <Skeleton variant="rectangular" width={100} height={40} />
      </Stack>
    </Box>
  );
}
