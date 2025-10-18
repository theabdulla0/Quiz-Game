import Result from "../models/result.model.js";

export const CreateResult = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }
    const { title, technology, level, totalQuestions, correct, wrong } =
      req.body;

    if (
      !title ||
      !level ||
      totalQuestions == undefined ||
      correct == undefined
    ) {
      return res
        .status(401)
        .json({ success: false, message: "Missing Fields" });
    }

    const computedWrong =
      wrong !== undefined
        ? Number(wrong)
        : Math.max(0, Number(totalQuestions) - Number(correct));

    if (!title) {
      return res
        .status(401)
        .json({ success: false, message: "Title is Missing" });
    }
    const payload = {
      title: String(title).trim(),
      technology,
      level,
      totalQuestions: Number(totalQuestions),
      correct: Number(correct),
      wrong: computedWrong,
      user: req.user.id,
    };
    const create = await Result.create(payload);
    return res
      .status(201)
      .json({ success: true, message: "Result created", results: create });
  } catch (err) {
    console.error("Create Result failed", err);
    return res.status(401).json({ success: false, message: "Server Error" });
  }
};

export const ListResult = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized" });
    }

    const { technology } = req.query;
    const query = { user: req.user.id };

    if (technology && technology.toLowerCase()) {
      query.technology = technology;
    }
    const items = await Result.find(query).sort({ createdAt: -1 }).lean();
    return res.status(200).json({ success: true, results: items });
  } catch (error) {
    console.error("Create Result failed", err);
    return res.status(401).json({ success: false, message: "Server Error" });
  }
};
