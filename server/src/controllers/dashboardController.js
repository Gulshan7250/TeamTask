import Task from "../models/Task.js";
import asyncHandler from "../utils/asyncHandler.js";
import { successResponse } from "../utils/apiResponse.js";

// @desc Dashboard summary
export const getDashboard = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // total tasks
  const total = await Task.countDocuments({ assignedTo: userId });

  // status counts
  const statusStats = await Task.aggregate([
    { $match: { assignedTo: userId } },
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 }
      }
    }
  ]);

  // overdue tasks
  const overdue = await Task.countDocuments({
    assignedTo: userId,
    dueDate: { $lt: new Date() },
    status: { $ne: "done" }
  });

  return successResponse(res, {
    totalTasks: total,
    overdueTasks: overdue,
    status: statusStats
  });
});