import { Request, Response } from "express";
import { ADMIN_CONFIG } from "../config/config";

//All the endpoints in this Particular controller are protected using Auth middleware

export const updateRate = async (req: Request, res: Response) => {
  try {
    const { rate } = req.body;
    ADMIN_CONFIG.rate = rate;
    return res.status(200).json({
      message: "Successfully updated the rate per file",
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to update rate" });
  }
};

export const updateMinDuration = async (req: Request, res: Response) => {
  try {
    const { duration } = req.body; // duration should be kept in seconds easier to handle
    ADMIN_CONFIG.minimumDuration = duration;
    return res.status(200).json({
      message: "Successfully updated the minimum Duration",
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to update rate" });
  }
};
